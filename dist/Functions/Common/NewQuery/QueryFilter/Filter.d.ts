/**
 * @module Intacct/SDK/Functions/Common/NewQuery/QueryFilter
 */
import IaXmlWriter from "../../../../Xml/IaXmlWriter";
import IFilter from "./IFilter";
export default class Filter implements IFilter {
    private readonly fieldName;
    static readonly EQUAL_TO: string;
    static readonly NOT_EQUAL_TO: string;
    static readonly LESS_THAN: string;
    static readonly LESS_THAN_OR_EQUAL_TO: string;
    static readonly GREATER_THAN: string;
    static readonly GREATER_THAN_OR_EQUAL_TO: string;
    static readonly BETWEEN: string;
    static readonly IN: string;
    static readonly NOT_IN: string;
    static readonly LIKE: string;
    static readonly NOT_LIKE: string;
    static readonly IS_NULL: string;
    static readonly IS_NOT_NULL: string;
    private value;
    private operation;
    constructor(fieldName: string);
    /**
     * Sets given value and operation to equal to for this filter
     * @param value
     * @return IFilter
     */
    equalTo(value: string): IFilter;
    /**
     * Sets given value and operation to not equal to for this filter
     * @param value
     * @return IFilter
     */
    notEqualTo(value: string): IFilter;
    /**
     * Sets given value and operation to less than for this filter
     * @param value
     * @return IFilter
     */
    lessThan(value: string): IFilter;
    /**
     * Sets given value and operation to less than or equal to for this filter
     * @param value
     * @return IFilter
     */
    lessThanOrEqualTo(value: string): IFilter;
    /**
     * Sets given value and operation to greater than for this filter
     * @param value
     * @return IFilter
     */
    greaterThan(value: string): IFilter;
    /**
     * Sets given value and operation to greater than or equal to for this filter
     * @param value
     * @return IFilter
     */
    greaterThanOrEqualTo(value: string): IFilter;
    /**
     * Sets given value and operation to between for this filter.  Only 2 values allowed.
     * @param min
     * @param max
     * @return IFilter
     */
    between(min: string, max: string): IFilter;
    /**
     * Sets given values and operation to in for this filter.
     * @param values
     * @return IFilter
     */
    in(values: string[]): IFilter;
    /**
     * Sets given values and operation to not in for this filter.
     * @param values
     * @return IFilter
     */
    notIn(values: string[]): IFilter;
    /**
     * Sets given values and operation to like for this filter.
     * @param value
     * @return IFilter
     */
    like(value: string): IFilter;
    /**
     * Sets given values and operation to not like for this filter.
     * @param value
     * @return IFilter
     */
    notLike(value: string): IFilter;
    /**
     * Sets given values and operation to is null for this filter.
     * @return IFilter
     */
    isNull(): IFilter;
    /**
     * Sets given values and operation to is not null for this filter.
     * @return IFilter
     */
    isNotNull(): IFilter;
    writeXml(xml: IaXmlWriter): void;
}